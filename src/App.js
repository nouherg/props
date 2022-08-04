import Profile from './component/Profile'
import Contact from './component/Contact'
function App() {
  return (
    <div className="App">
     <Profile image='https://th.bing.com/th/id/OIP.95E9HuLLnN8Tb1_0XUmS5AHaE8?pid=ImgDet&w=1024&h=683&rs=1'
             name='nouhe reguigui'
              profession='developer'
              email='nouhereguigui@gmail.com' />
      <Contact /> 
    </div>
  );
}

export default App;
