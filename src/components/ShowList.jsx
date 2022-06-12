import '../assets/css/ShowList.css'
import PropTypes from 'prop-types'
function ShowList({ list = ['a', 'b'] }) {
  return <div className="wrap">这里是ShowList: {list}</div>
}

ShowList.propTypes = {
  list: PropTypes.array, // 表名list是array类型，必传
}

export default ShowList
