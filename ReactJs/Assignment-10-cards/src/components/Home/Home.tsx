import Card from '../Card/Card';
import profiles from '../../assets/profiles.json';

const Home = ()=>{
    return(
        <div className="App">
            {profiles.map((profile) => <Card profile={profile} />)}
        </div>
    )
}

export default Home;