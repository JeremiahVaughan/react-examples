import {rest} from "msw";
import {setupServer} from "msw/node";

export const createServer = (handlerConfig) => {
  const handlers = handlerConfig.map(config => {
      return rest[config.method || 'get'](config.path, (req, res, context) => {
          return res(
              context.json(
                  config.res(req, res, context)
              )
          )
      })
  })
    const server = setupServer(...handlers)

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())
}
