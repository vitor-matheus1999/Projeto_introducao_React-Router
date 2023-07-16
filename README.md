# Projeto_introducao_React-Router
Projeto que visa estudar o pacote criado para facilitar a utilização de rotas para as páginas de um site.Nesse projeto é utilizado o React Router versão 6.

---

## Sobre o projeto:

Esse projeto, visa ser uma introdução sobre como o pacote React Router pode facilitar a tarefa de designar as rotas corretas para determinadas páginas. Nesse pequeno projeto contém cinco páginas diferentes que exemplificam como o React Router funciona.

## Sobre as páginas:

* **Inicio e Sobre** - Exemplifica como as páginas aparecerão quando utilizar o pacote React Router e suas funções.
<div>
  <img width='400em' src="imagens sobre o site/inicio.JPG">
  <img width='500em' src="imagens sobre o site/sobre.JPG">
</div>

Utilizando a função "BrowserRouter" juntamente com os demais métodos  "Routes", "Route" e a constante "Link" é possível referênciar os componentes de forma precisa e prática. O "BrowserRouter" é o método responsável por informar para a aplicação que teremos um roteamento de componentes.

Primeiramente para utilizar a função "BrowserRouter" é preciso importar ela do pacote "react-router-dom":

```javascript
import {BrowserRouter} from 'react-router-dom'
```
Depois de realizada o "import" da função, é necessário inserir os componentes que conterão os métodos "Routes" e "Route" e a constante "Link", dentro das tags do "BrowserRouter". No caso do código presente nesse repositório, os componentes "Menu" e "Content", que está presente dentro da pasta "Views", serão os componentes responsáveis por contar os métodos e a constante, respectivamente.

```javascript
import {BrowserRouter} from 'react-router-dom'

import Menu from '../components/layouts/Menu'
import Content from '../components/layouts/Content';

const App = props =>{
   return( 
   
   <div className='App'>
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
   </div>
    )
}
export default App;
```
Seguindo para os componentes que controlam as rotas. Começando pelo componente "Content", ele responsável por qual contéudo será apresetado na tela, importando os métodos "Routes" e "Route", será possível referênciar os componentes de forma correta com seus respectivo conteúdo. Assim, para utilizar os métodos é preciso inserir a tag "Route" dentro da tag "Routes":

```javascript

import {Routes, Route} from 'react-router-dom';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = props =>{
    return( 
    <main className='Content '>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/param/:id' element={<Param/>}/>
            <Route path="*" element={<NotFound/>}/> 
        </Routes>
    </main>
    )
}
export default Content ;

```
O método "Route" contém as propriedades :
```javascript 
<Route path='/'/>
```
- Utilizada para referênciar a rota que o componente tem.
  
e

```javascript 
<Route element={<Home/>}/>
```
* Utilizado para referênciar qual componente deve ser apresentado.

Por fim dentro do componente "Menu" terá a constante "Link", que terá a função de referênciar o caminho para o componente e seu respectivo conteúdo, já atuando como um botão com a tag html utilizada para linkar conteúdos <a>.

```javascript
import{Link} from 'react-router-dom";

<Link to='/'>Home</Link> 
```
Sendo preciso que o caminho que está presente no "path" no outro componente, seja exato com o "to" na constante "Link":

```javascript
import{Routes, Route} from "react-router-dom"

<Routes>
    <Route path='/' exact element={<Home/>}/> //<-- Iguais
</Routes>

```

```javascript
import{Link} from 'react-router-dom";

<Link to='/'>Home</Link>;//<--Iguais
```
---

## Sobre navegação com parâmetro

Para que seja possível utilizar parametros nas URLS é preciso primeiro, quando estiver definindo o caminho necessário dentro do "path" da tag "Route", inserir uma variável ":id".
```javascript
<Route path='/param/:id' element={<Param/>}/> // <--- Os dois pontos definem que o valor no path não é literal e sim uma variável
```
Em seguida, na propriedade "to" da tag "Link", é possível inserir um parametro que irá levar para uma URL que tem o nome especificado, como é possível ver na imagem e no código a seguir:

```javascript
<Link to='/param/123'>#01 Param</Link>
```
<div>
  <img  src="imagens sobre o site/exemplo.JPG">
</div>

Com o id é obrigatório que sejá inserido algum conteúdo na propriedade "to" da constante "Link", para que o caminho seja reconhecido e possa ser apresentado na página.
---

## Usando o React Hook "useParams" para que o conteúdo no "path" sejá apresentado na tela

A função "useParams()" é um hook que permite que os parametros inseridos nele possam ser retornados, fazendo com que sejá retornado um objeto do parametro criado.

Primeiramente é preciso importar a hook:
```javascript
import{useParams} from 'react-router-dom'
```

E como nesse exemplo foi utilizado o ":id" é preciso inserir o mesmo nome utilizado no parametro anteriormente, por isso será criado uma constante que retorna o objeto "id":

```javascript
const Param = props =>{
    const {id} = useParams();

    return( 
        <div className='Param'>
            <h1>Param</h1>
            <h2>Valor : {id}</h2>
        </div>
    )
}
export default Param ; 

```

Agora basta só utilizar a constante onde for necessário que a informação que for constar na propriedade "to" na tag "Link" irá retornar como conteudo na página web:


```javascript
<Link to='/param/123'>#01 Param</Link> // <-- Veja que o conteúdo presente na url também está na página.
```
 <img  src="imagens sobre o site/param um.JPG">

```javascript
<Link to='/param/Teste'>#02 Param</Link> // <-- Veja que o conteúdo presente na url também está na página.
```
 <img  src="imagens sobre o site/param dois.JPG">

## Caso a rota não existe ou não tenha o conteúdo requisitado 

A última opção do menu apresenta uma situação em caso do caminho requerido não existir, caso isso ocorre é possível específicar uma página padrão que retorne o problema

```javascript
  <Route path="*" element={<NotFound/>}/> 
```
Inserindo o caracter "*" toda página que levar a um caminho que não existe, irá retornar uma página padrão de erro, como é visto no exemplo a seguir:

* Lista de caminhos existentes:
```javascript
<Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/param/:id' element={<Param/>}/>
    <Route path="*" element={<NotFound/>}/> 
</Routes>
```

```javascript
<Link to="/naoexiste" >Não existe caminho especifico</Link> //<--- Perceba que o caminho não existe na lista acima
```
Resultado:

 <img  src="imagens sobre o site/erro.JPG">

### Fim
