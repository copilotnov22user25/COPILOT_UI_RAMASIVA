import { Col } from "react-bootstrap";

export const FetchDist = async () => {
    const url = "https://jnboverseas.apcfss.in/apdistman";
    let data = "RAM";
    try {
        const response = await fetch(url);
        const apiData = await response.json();
        data = apiData.APCFSS_Districts;
        return data;
    } catch (error) {
        console.error(error);
        return null;
    } 
};

export const CardComponent = (props) => {
    return (
        <Col md={4} className="p-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.distCode}</h5>
                <p className="card-text">{props.distName}</p> 
            </div>
        </div>
        </Col>
    );
}

