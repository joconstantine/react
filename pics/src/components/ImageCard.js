import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() { //after render
        this.imageRef.current.addEventListener('load', this.setSpans); // to call setSpans after 'load'
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        // this.setState({ spans: spans}); 
        this.setState({ spans }); // alternate syntax
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;