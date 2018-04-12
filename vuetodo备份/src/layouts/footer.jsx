// import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Fridolph'
    }
  },
  render () {
    const style = {
      marginTop: '40px',
      textAlign: 'center',
      color: '#bfbfbf',
      fontSize: '10px',
      textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)'
    }

    return (
      <div id="footer" style={style}>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
