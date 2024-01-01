import{Card} from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard =()=>{
    return(
        <Card
        title="Ditto"
        cover={<img src="" alt="Ditto"/>}
        >
        <Meta description='fire, magic'/>
        </Card>
    );
}
export default PokemonCard;
