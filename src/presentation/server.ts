import express, {Router} from "express";
import cors from 'cors';

interface Options{
    port?: number;
    routes: Router;
}

export class Server {
    
    public readonly app = express()
    private readonly port: number;
    private readonly routes: Router;
    
    constructor( options: Options) {
        const {port = 3000, routes} = options;
        this.port = port;
        this.routes = routes;
    }

    async start()  {

        // Middlewares
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use(cors());

        this.app.use(this.routes);

        this.app.get("/", (req, res) => {
            res.send({
                message: "Server started",
            })
        });

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })
    }
}