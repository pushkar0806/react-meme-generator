import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyMemes extends Component {
    render () {
        return (
            <div>
                {
                    this.props.myMemes.map((item, index) => {
                        return (
                        <img 
                            key={index}
                            src={item.data.url}
                            alt="my-meme"
                            className="my-meme-image"
                            />
                        )
                    })
                }
            </div>
        )
    }
}

 function mapStateToProps(state) {
     return {
         myMemes: state.myMemes
     }
 }

export default connect(mapStateToProps, null)(MyMemes)
