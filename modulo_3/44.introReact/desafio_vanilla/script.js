const contInfos = document.getElementById('infos');
const btnReact = document.getElementById('btn-react');
const btnPrincipais = document.getElementById('btn-principais');
const btnREcursos = document.getElementById('btn-recursos');

btnReact.addEventListener('click', () => {
    contInfos.innerHTML = `
        <ul>
            <li>React é extremamente popular</li>
            <li>Facilita a criação de interfaces de usuário complexas e interativas</li>
            <li>É poderoso e flexível</li>
            <li>Possui um ecossistema muito ativo e versátil</li>
        </ul>`;
});

btnPrincipais.addEventListener('click', () => {
    contInfos.innerHTML = `
        <ul>
            <li>Componentes, JSX e Props</li>
            <li>Estado</li>
            <li>Hooks (ex: useEffect())</li>
            <li>Renderização dinâmica</li>
        </ul>`;
});

btnREcursos.addEventListener('click', () => {
    contInfos.innerHTML = `
        <ul>
            <li>Página oficial (react.dev)</li>
            <li>Next.js (Framework Fullstack)</li>
            <li>React Native (construa aplicativos móveis nativos com React)</li>
        </ul>`;
});