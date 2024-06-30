import { openDb } from "../config/dbConnect.js";


const db = await openDb();

class heroiController {
    static async listarHerois(req , res) {
        try{
            const listaHerois = await db.all("SELECT * FROM  heroes");
            res.status(200).json(listaHerois);
        } catch (error) {
            res.status(500).json({ massage: `${erro.message} - Falha na requisição`});
        }
    };

    static async listarHeroisPorId(req , res) {
        try{
            const id = req.params.id;
            const heroiEncontrado = await db.all("SELECT * FROM  heroes WHERE id=?", [id]);
            res.status(200).json(heroiEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    };

    static async cadastrarHeroi(req, res){ 
        try{
            const {nome, planeta, poder} = req.body;
            const novoHeroi = await db.run("INSERT INTO heroes (nome, planeta, poder) VALUES (?,?,?)", [nome, planeta, poder]);
            res.status(200).json({message: "Adicionado com sucesso", heroi: novoHeroi});
        }catch(error) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar heroi` });
        }
    };

    static async atualizarHeroi(req, res){ 
        try{
            const id = req.params.id;
            const {nome, planeta, poder} = req.body;
            await db.run("UPDATE heroes SET nome=?, planeta=?, poder=? WHERE id=?", [nome, planeta, poder, id]);
            res.status(200).json({message: "Heroi Atualizado"});
        }catch(error) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar heroi` });
        }
    };

    static async deletarHeroi(req, res){ 
        try{
            const id = req.params.id;
            await db.run("DELETE FROM heroes WHERE id=?", [id]);
            res.status(200).json({message: "Heroi Deletado"});
        }catch(error) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar heroi` });
        }
    };




 };

export default heroiController;