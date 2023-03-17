// STRING
function showTicket(user: string, ticket: number) {
  console.log(`Olá, ${user ?? "Usuário Padrão"}. Seu número de bilhete é ${ticket}`)
}

showTicket("Lucas", 123)

// VARIABLE
function sum(a: number, b: number) {
  return a + b;
}

let people: string = "Lucas";
let user = 10;

let loading: boolean;
loading = false;

let email: string;
email = "lucashlc.contato@gmail.com"

let number: number[];
number = [1, 2, 3, "Lucas"]

// FUNCTIONS
function showMessages(message: string): void { // não tem retorno
  console.log(message)
}

function showText(message: string) {
  return message
}

function showNumber(message: number) {
  return message
}

function showOr(message: number | string | boolean) { // union
  return message
}

// GENERICS
/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T extends number | string = string>(){ // define que podemos escolher entre number ou string, e se não tiver ele escolhe string
  let state: T;

  function get(){
      return state;
  }

  function set(newValue: T) {
      state = newValue;
  }

  return { get, set };
}

let newState = useState();

newState.get();
newState.set('Rodrigo');
newState.set(123)

// TYPE

type IdType = string | number | undefined;

let userId: IdType;

userId = "Lucas";
userId = true;

// TYPE ASSERTIONS
// Permite ao desenvolvedor informar ao compilador de TypeScript o tipo de uma variável, mesmo que o compilador não possa determinar o tipo por conta própria.
type UserResponse = {
  ui: number,
  name: string,
  avatar: string,
}

let UserResponse = {} as UserResponse

// OBJECTS
type Point = {
  x: number,
  y: number,
}

function printCoords(points: Point) {
  console.log(`O eixo x: ${points.x}`)
  console.log(`O eixo y: ${points.y}`)
}

printCoords({x: 10, y: 50})

type User = {
  name: string,
  age: number,
}

function printUser(points: User) {
  console.log(`Nome é: ${points.name}`)
  console.log(`Idade: ${points.age}`)
}

printUser({name: "Lucas", age: 12})

// INTERSECÇÃO DE TIPOS
type User = {
  id: number,
  name: string,
}

type Char = {
  nickname: string,
  level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
  id: 1,
  name: 'João Inácio',
  nickname: 'birobirobiro',
  level: 50
}

// INTERFACE
interface User {
  id: number,
  name: string,
}

// Qual a diferença?
// type, é mais simples e fácil de manutenção
// interface é para quem faz biblioteca

