import { Express } from 'express'
import { createServer, Server } from 'http'
import debug from 'debug'

type PortType = number | string | false

export class ServerService {
  static init = (app: Express) => {
    ServerService.startServer(app)
  }
  
  private static startServer = (app: Express) => {

    const port: PortType = ServerService.normalizePort(process.env.PORT || '3000')
  
    /**
     * Get port from environment and store in Express.
     */
  
    app.set('port', port)
    
    /**
      * Create HTTP server.
      */
    
    const server: Server = createServer(app)
  
    /**
      * Listen on provided port, on all network interfaces.
      */
    
    server.listen(port)
    server.on('error', (error: NodeJS.ErrnoException) => ServerService.onError(error, port))
    server.on('listening', () => {
      var addr = server.address()
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
      debug('Listening on ' + bind)
    })
    
  }
  
    /**
      * Normalize a port into a number, string, or false.
      */
  
  private static normalizePort = (val: string) => {
    const port: number = parseInt(val, 10)
  
    if (isNaN(port)) {
      // named pipe
      return val
    }
  
    if (port >= 0) {
      // port number
      return port
    }
  
    return false
  }
  
  /**
   * Event listener for HTTP server "error" event.
   */
  
  private static onError = (error: NodeJS.ErrnoException, port: PortType) => {
    if (error.syscall !== 'listen') {
      throw error
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
      default:
        throw error
    }
  }
}
