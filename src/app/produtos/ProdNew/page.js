import styles from "./page.module.css";

const enviarFormulario = async (e) => {
    e.preventDefault();
    const newMsg = { nome: nomeForm, turma: turmaForm, msg: msgForm };
    try {
        const response = await fetch(
            'https://api.front.dev.vilhena.ifro.edu.br/msg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMsg),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        sendTaskMessage([...msg, data]);
        setNomeForm(''); setTurmaForm(''); setMsgForm('');
    } catch (error) {
        alert('Erro ao enviar as mensagens' + error.message);
    }
}
enviarFormulario();
export default function Post() {

    return (
        <div className={styles.div}>

        </div>
    )
}