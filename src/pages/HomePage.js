import React from 'react';
import CatatanList from '../components/CatatanList';
import { deleteCatatan, getCatatans } from '../utils/data';
import CatatanInput from '../components/CatatanInput';
 
class HomePage extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     catatans: getCatatans(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
 }
 
 onDeleteHandler(id) {
   deleteCatatan(id)
   
   this.setState(() => {
    return {
      catatans: getCatatans(),
    }
  });
 }

 onAddCatatanHandler({ title, body}) {
  this.setState((prevState) => {
    return {
      catatans: [
        ...prevState.catatans,
        {
          id: +new Date(),
          title, 
          body, 
          createdAt: new Date().toISOString()
        },
      ],
    };
  });
}
 
 render() {
   return (
    <div className="catatan-app">
    <h1>Your Notes</h1>
    <h2>Tambah Catatan</h2>
    <CatatanInput addCatatan={this.onAddCatatanHandler} />
    <h2>Daftar Catatan</h2>
    <CatatanList catatans={this.state.catatans} onDelete={this.onDeleteHandler} />
  </div>
   );
 }
}
 
export default HomePage;