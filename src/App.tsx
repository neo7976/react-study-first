import React from 'react';
import './App.css';

// function App() {
//   return (
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//   );
// }
type TitleProps = {
    title: string
    test?: string
}
// const Title:React.FunctionComponent<{title: string}> = ({title}) => <h1>Hello world!!!</h1>
const Title = ({title, test = 'test'}: TitleProps) => <h1>{title} {test}</h1>
const App = () => <Title title="test"/>

export default App;
