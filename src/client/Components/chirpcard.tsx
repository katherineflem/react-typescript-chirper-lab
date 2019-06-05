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
        this.setState({ chirps });
    } 

    handleDelete (id: string) {
        //DELETE REQUEST
        console.log(id)
        fetch(`/api/chirps/${id}`, {
            method: "DELETE",
        })
            .then(() => fetch('api/chirps'))
            .then(res => res.json())
            .then(chirps => this.setState({ chirps }))
            .catch(err => console.log(err))
    }


    // handleEditChirp(id: React.MouseEvent<HTMLButtonElement>) {
    //     fetch(`/api/chirps/${id}`), {
    //         method: 'PUT',

    //     }
    // }


    render() {
        return (
            <section className="row">
                {this.state.chirps.map(chirp => {
                    return (
                        <article key={chirp.id} className="col md-6">
                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true" onClick={this.handleDelete(chirp.id)}>&times;</span>
                                    </button>
                                    <h3 className="card-title">{chirp.name}</h3>
                                    <div className="card-text">{chirp.message}</div>
                                    <button className="btn btn-sm btn-link">Edit Chirp</button>
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
