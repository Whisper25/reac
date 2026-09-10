import Product from "./components/UserProfile/Product/Product"
import UserProfile from "./components/UserProfile/UserProfile"


function App() {

  return <>
    <UserProfile name='Oleg' age={42} email="oleg@gmail.com"/>
    <img src="https://aquaforest.eu/wp-content/uploads/2025/06/blazenek-scaled.jpg" alt='fish' />
    <table>
      <tr>
        <th>title</th>
        <th>price</th>
        <th>quantity</th>
      </tr>
      <Product title='Milk' price={32} quantity={1}/>
    </table>
  </>

}

export default App
