// Importa o plugin 'html-webpack-plugin', que vai gerar um arquivo HTML e injetar automaticamente o bundle JavaScript nele
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Importa o módulo 'path' do Node.js
const path = require('path');

module.exports = {
    // Define o arquivo de entrada para o Webpack, que será o ponto de partida da aplicação
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js', // Nomeação do arquivo - código minificado
        path: path.resolve(__dirname, 'public'), // pasta onde o bundle.js será gerado
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /mode_modules/,
                use: "babel-loader"
            }
        ]
    },
    // Configura os plugins que o Webpack vai usar
    plugins: [
        // Vai gerar automaticamente um arquivo HTML baseado no template fornecido
        // e vai injetar o bundle gerado pelo Webpack dentro do arquivo HTML
        new HtmlWebpackPlugin()
    ]
}