import express, {Request, Response, NextFunction} from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configurações para a aplicação aceitar BODY enviado utilizando JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true  }));

// Configuração das Rotas
app.use(usersRoute);
app.use(statusRoute);

// Configuração dos Handlers de erro
app.use(errorHandler);

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000 ...');
});




