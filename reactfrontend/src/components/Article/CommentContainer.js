import CommentInput from './CommentInput';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const CommentContainer = props => {
  if (true) {
    return (
      <div className="col-xs-12 col-md-12 offset-md-0">
        
        {/*
        <div>
          <list-errors errors={props.errors}></list-errors>
          <CommentInput slug={props.slug} currentUser={props.currentUser} />
        </div>
      

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
        */}

         <ReactTable
            data={[{
              name: 'Tanner Linsley',
              age: 26,
              friend: {
                name: 'Jason Maurer',
                age: 23,
              },
               firstName: 'name',
              lastName: 'name',
              age: Math.floor(Math.random() * 30),
              visits: Math.floor(Math.random() * 100),
              progress: Math.floor(Math.random() * 100),
              status:"single"
            }]} 
          columns={[{
        Header: 'Fecha',
        accessor: 'progress',
        Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#dadada',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 66 ? '#85cc00'
                  : row.value > 33 ? '#85cc00'
                  : '#85cc00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            />
          </div>
        )
      }, {
        Header: 'Action',
        accessor: 'status',
        Cell: row => (
          <span>
            <a href="/login">ver</a>
          </span>
        )
      }]
}
          />
      </div>
    );
  } else {
    return (
      <div className="col-xs-12 col-md-12 offset-md-0">
        <p>
          <Link to="/login">Ingresa a tu cuenta</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p>
{/*
        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser} />
          */}
      </div>
    );
  }
};

export default CommentContainer;
