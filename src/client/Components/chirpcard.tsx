import * as React from 'react';

class Chirps extends React.Component<IChirpsProps, IChirpsState>{
    constructor(props: IChirpsProps) {
        super(props);
        this.state = {
            chirps: []
        }
    }

    //we want our chirps to be the chirps we have on backend 
    async componentDidMount() {
        let r = await fetch('/api/chirps');
        let chirps = await r.json();
        this.setState({ chirps })
    }



    render() {
        return (
            <section className="row">
                {this.state.chirps.map(chirp => {
                    return (
                        <article key={chirp.id} className="col md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{chirp.name}</h3>
                                    <div className="card-text">{chirp.message}</div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        )
    }
}

export default Chirps
interface IChirpsProps { }
interface IChirpsState {
    chirps: {
        id: string,
        name: string,
        message: string
    }[]
}
