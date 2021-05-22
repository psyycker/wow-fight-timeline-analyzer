import * as Express from "express"

export default function createService(namespace: string, callback: (router: Express.Router) => void): (app: Express.Application) => void {
  if (!namespace.startsWith("/")) {
    throw new Error("Namespace must start with a /")
  }
  return function (app: Express.Application) {
    const router = Express.Router();
    callback(router);
    app.use(namespace, router);
  }
}
