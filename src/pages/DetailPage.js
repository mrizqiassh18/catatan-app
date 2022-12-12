import React from 'react';
import CatatanDetail from '../components/CatatanDetail';
import { useParams } from 'react-router-dom';
import { getCatatan } from '../utils/data';
import { deleteCatatan } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const {id} = useParams();
  const navigate = useNavigate()
  return <DetailPage id={Number(id)} navigate={navigate}/>
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: getCatatan(props.id),
    };
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  
  onDeleteHandler(id) {
    deleteCatatan(id)
    this.props.navigate('/');

  }

  render() {
    if (this.state.catatan === null) {
      return <p>Catatan Tidak Ditemukan!</p>
    }

    return (
      <section>
        <CatatanDetail {...this.state.catatan} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;