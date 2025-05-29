export default function banner(){
    return(
        <div>
            <div className="banner">
                <h4>Welcome to the official website of DCC- Domestic Cricket Coucil</h4>
            </div>
            <style jsx>{`
                .banner {
                    background-color: #f8f9fa;
                    padding: 20px;
                    text-align: center;
                    border-bottom: 2px solid #dee2e6;
                }
                .banner h1 {
                    margin: 0;
                    font-size: 2.5em;
                    color: #343a40;
                }
                .banner p {
                    font-size: 1.2em;
                    color: #6c757d;
                }
            `}</style>
        </div>
    )
}