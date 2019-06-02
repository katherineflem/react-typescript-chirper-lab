import * as React from 'react'
import { Link } from 'react-router-dom'
class AddChirp extends React.Component<IAddchirpState, IAddchirpProps>{

    constructor(props: IAddchirpProps) {
        super(props); {
            this.state={
                id: '',
                name:'',
                message: ''
            }
        }
    }

    

    submitHandler = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        // let newChirp = this.state;
        let formData= new FormData()
        fetch('/api/chirps', {
            method: 'POST',
            body: formData
        }).then (res =>res.json())
        .then(res =>console.log(JSON.stringify(res)))
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}></input>
                        <input type="text" className="form-control" id="message" value={this.state.message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value })}></input>
                        <Link className="btn btn-success" type="submit" to="/" onClick={this.submitHandler}>Add Chirp</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddChirp
interface IAddchirpProps {
        id: string,
        name: string,
        message: string
    }

interface IAddchirpState { 
    id: string,
    name: string,
    message: string
}
