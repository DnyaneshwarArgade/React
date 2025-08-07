import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

      const create = () => {
          navigate('/Create');
      };

      const fetch = () => {
         navigate('/FetchAPI');
      };

      const deletee = () => {
        navigate('/DataDelete');
      };

      const updatee = () => {
         navigate('/Updata');
      };




    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-0'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" onClick={create} aria-current="page">Create</a>
                                    </li>
                                     <li class="nav-item">
                                        <a class="nav-link active" onClick={fetch} aria-current="page">Fetch</a>
                                    </li>
                                     <li class="nav-item">
                                        <a class="nav-link active" onClick={updatee} aria-current="page">Update</a>
                                    </li>
                                     <li class="nav-item">
                                        <a class="nav-link active" onClick={deletee} aria-current="page">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Home;