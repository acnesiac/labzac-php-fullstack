import React,{Component} from 'react';
import Calculator from './Calculator';
import Empleado from './Empleado';
class Section extends Component {
	render (){
	return (
		<section>
		<div className="container">
			<div className="row">
				<div className="col-md-2">
					<div className="panel">
						<div className="panel-heading">
							<h4>Hello</h4>
						</div>
						<div className="panel-body">
							<button id="default" type="button" className="btn btn-lg btn-warning">press</button>
							
						</div>
					</div>
				</div>
				<div className="col-md-10">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>panel heading</h4>
						</div>
						<div className="panel-body">
							
						
						<div className="col-md-3">
							<div className="well">
								<h2>hola</h2>
								<h3>mundo</h3>
							</div>
						</div>
						<div className="col-md-3">
							<div className="well">
								<h2>hola</h2>
								<h3>mundo</h3>
							</div>
						</div>
						<div className="col-md-3">
							<div className="well">
								<h2>hola</h2>
								<h3>mundo</h3>
							</div>
						</div>
						<div className="col-md-3">
							<div className="well">
								<h2>hola</h2>
								<h3>mundo</h3>
							</div>
						</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>hello</h4>
						</div>
						<div className="panel-body">
							<Calculator/>	
							
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<h4>Empleados</h4>
						</div>
						<div className="panel-body">
							<Empleado/>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	

	);
	}
}
export default Section;

	