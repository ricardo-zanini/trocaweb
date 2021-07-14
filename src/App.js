import Dropzone from './components/Dropzone/dropzone.js'

function test(){
  console.log('aqui')
}

export default function App() {
  return (
    <div className="App">
      <Dropzone></Dropzone>
      <div onClick={() =>test()}>teste</div>

    </div>
  );
}