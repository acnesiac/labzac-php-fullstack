import CommentInput from './CommentInput';
import CommentList from './CommentList';
import ProfilePage from '../Upload/ProfilePage';

import { Link } from 'react-router-dom';
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const CommentContainer = props => {
  if (true) {
    return (

      <div className="home-page">




        <div className="container page">
         <div className="row">
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


            <table className="">
                <tbody>
                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                Identificacion
                            </strong>
                        </td>
                        <td className="text-primary">
                            123456789
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-user  text-primary"></span>
                                Name
                            </strong>
                        </td>
                        <td className="text-primary">
                            Bootdey
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-cloud text-primary"></span>
                                Lastname
                            </strong>
                        </td>
                        <td className="text-primary">
                            Bootstrap
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                Username
                            </strong>
                        </td>
                        <td className="text-primary">
                            bootnipets
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-eye-open text-primary"></span>
                                Role
                            </strong>
                        </td>
                        <td className="text-primary">
                            Admin
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-envelope text-primary"></span>
                                Email
                            </strong>
                        </td>
                        <td className="text-primary">
                            noreply@email.com
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                created
                            </strong>
                        </td>
                        <td className="text-primary">
                            20 jul 20014
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-calendar text-primary"></span>
                                Modified
                            </strong>
                        </td>
                        <td className="text-primary">
                             20 jul 20014 20:00:00
                        </td>
                    </tr>
                    <tr>

                    <Link
                      to={`/loadimage`}
                      className="btn btn-outline-secondary btn-md">
                      <i className="ion-edit"></i> Subir Imagen
                    </Link>
                    </tr>
                </tbody>
            </table>




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
            <a href="/loadimage">Zoom, ver comentarios, commentar</a>
          </span>
        )
      }]
}
          />
      </div>
       </div>
         </div>
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
