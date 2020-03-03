const alunosDaEscola = require('../dadosAlunos');

// implementação

const alunoController = {
  adicionarAluno: (nome) => {
    let verificaAluno = alunosDaEscola.find(aluno => aluno.nome === nome);
    if(verificaAluno){
      console.log("Já existe aluno com este nome em nosso sistema.");
    }else{
      alunosDaEscola.push({nome,notas:[],cursos:[],faltas:0});
      console.log("Aluno cadastrado com sucesso.");
    }
     /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    },
   
    listarAlunos: () => {
      let alunosCadastrados = JSON.stringify(alunosDaEscola,null,2);
      console.log(alunosCadastrados);
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que as informações deverão ser exibidas em um formato amigável.*/
    },
  
    buscarAluno: (nome) => {
      let buscaAluno = alunosDaEscola.find(aluno => aluno.nome === nome);
      if(buscaAluno){
        console.log("Aluno localizado com sucesso!")
        console.log(buscaAluno);
      }else{
        console.log("Aluno não localizado em nosso sistema");
      }
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
   },
  
    matricularAluno: (aluno, curso) => {
      let indiceAluno = alunosDaEscola.findIndex(alunoCadastrado => alunoCadastrado.nome === aluno);
      let dataMatricula = new Date;
      if(indiceAluno>=0&&indiceAluno<alunosDaEscola.length){
       alunosDaEscola[indiceAluno].cursos.push({"nomeDoCurso":curso,"dataMatricula":dataMatricula});
       console.log("Aluno matriculado com sucesso no curso de "+curso+" em "+dataMatricula)
      }else{
        console.log("Aluno não cadastrado em nosso sistema")
      }
    /* Essa funcionalidade irá permitir cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula.
    Lembre-se de exibir o feedback para o usuário. */
   },
  
    aplicarFalta: (aluno) => {
      let indiceAluno = alunosDaEscola.findIndex(alunoCadastrado => alunoCadastrado.nome === aluno);
      if(indiceAluno>=0&&indiceAluno<alunosDaEscola.length&&alunosDaEscola[indiceAluno].cursos.length>0){
        alunosDaEscola[indiceAluno].faltas++;
        console.log(`Falta adicionada com sucesso para o aluno ${aluno}`);
      }else{
        console.log("Não é possível inserir faltas. O aluno não está matriculado em nenhum curso.")
      }
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo estiver matriculado em um curso.
    */
    },
    
    aplicarNota: (aluno) => {
      let indiceAluno = alunosDaEscola.findIndex(alunoCadastrado => alunoCadastrado.nome === aluno);
      if(indiceAluno>=0&&indiceAluno<alunosDaEscola.length&&alunosDaEscola[indiceAluno].cursos.length>0){
        let readlineSync = require('readline-sync');
        let nota = readlineSync.questionFloat('Digite a nota para o aluno: ');
        alunosDaEscola[indiceAluno].notas.push(nota);
        console.log(`Nota ${nota} adicionada com sucesso para o aluno ${aluno}`);
      }else{
        console.log("Não é possível inserir nota. O aluno não está matriculado em nenhum curso.")
      }
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo estiver matriculado em um curso.
    */
   },
   
     aprovarAluno: (aluno) => {
      let indiceAluno = alunosDaEscola.findIndex(alunoCadastrado => alunoCadastrado.nome === aluno);
      if(indiceAluno>=0&&indiceAluno<alunosDaEscola.length){
        let media = alunosDaEscola[indiceAluno].notas.reduce((soma,nota)=> soma+nota,0);
        let faltaAluno = alunosDaEscola[indiceAluno].faltas;
        if(faltaAluno<4&&media>6){
          console.log("Aluno aprovado.");
        }else{
          console.log("Aluno reprovado.");
        } 
      }else{
        console.log("O aluno não está matriculado em nenhum curso.");
      }
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     O aluno só poderá ser aprovado se o mesmo estiver matriculado em um curso.
     */
     }
  
}

module.exports = alunoController;

   