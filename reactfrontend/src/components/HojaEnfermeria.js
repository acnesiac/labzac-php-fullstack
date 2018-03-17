import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {LineChart} from 'react-d3-basic';
import { Link } from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';


import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onUnload: payload =>
    dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

class HojaEnfermeria extends React.Component {
  constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeBody = updateFieldEvent('body');
    this.changeTagInput = updateFieldEvent('tagInput');

    this.watchForEnter = ev => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        this.props.onAddTag();
      }
    };

    this.removeTagHandler = tag => () => {
      this.props.onRemoveTag(tag);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const article = {
        title: this.props.title,
        description: this.props.description,
        body: this.props.body,
        tagList: this.props.tagList
      };

      const slug = { slug: this.props.articleSlug };
      const promise = this.props.articleSlug ?
        agent.Articles.update(Object.assign(article, slug)) :
        agent.Articles.create(article);

      this.props.onSubmit(promise);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.slug) {
      return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
      const data1 = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
      const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Hoja de evolucion del paciente',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
      var data = [
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ];
 
      var chartSeries = [
          {
            field: 'age',
            name: 'Presion arterial',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ],
        x = function(d) {
          return d.index;
        };
const data3 = {
  labels: ['10 AM', '11 AM', '12 AM', '13 PM', '14 PM', '15 PM', '16 PM'],
  datasets: [
    {
      label: 'Evolucion del paciente',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-12 offset-md-0 col-xs-12">

              <h2>Presion arterial</h2>
              <Line data={data3} />
            <ListErrors errors={this.props.errors}></ListErrors>
            </div>

            {/*http:///bootdey.com/snippets/view/Table-user-information#preview */}
<div className="container page">
<div className="">
    <div className="row">
        
        <div className="col-md-12">
            <strong>Information</strong>
            <div className="table-responsive">
            
            <table className="table table-condensed table-responsive table-user-information">
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
                </tbody>
            </table>


            </div>
        </div>
    </div>
</div>
</div> 
          </div>




          <Link to="/" className="nav-link" role="button"  className="btn btn-lg  btn-primary  pull-xs-left">
            Regresar        
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HojaEnfermeria);
