import Dropzone from '../../components/Dropzone/dropzone/dropzone.js'
function test(){
  console.log('aqui')
}

export default function Upload() {
  return (
    <div className="App">
      <Dropzone></Dropzone>
      <div onClick={() =>test()}>teste</div>

    </div>
  );
}