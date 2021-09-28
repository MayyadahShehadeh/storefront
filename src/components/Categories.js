import React from 'react';
import  Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { changeActive,getData } from '../store/actions/Actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Categories = (props)=> {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getData()).then(() => {
          dispatch(changeActive('Electronics'))
      })
  }, [dispatch])

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{marginTop:'15px', marginLeft:'10%', fontSize:'30px'}}>
        {props.categories.map(item => {
          return <Link color="inherit" onClick={() => { dispatch(changeActive(item.name)) }}>
          {item.name}</Link>
          
        })}
      </Breadcrumbs>
      <p style={{marginLeft:'10%', fontSize:'20px', marginTop:'2%'}}>{props.categoryType.name}</p>
      <p style={{marginLeft:'10%', fontSize:'20px'}}>{props.categoryType.description}</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return state.categories;
}


export default connect(mapStateToProps)(Categories);