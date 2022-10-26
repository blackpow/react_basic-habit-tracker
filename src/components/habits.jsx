import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class habits extends Component {
    handleAdd = name => {
        this.props.onAdd(name);
    }
    
    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => 
                        (<Habit key={habit.id} habit={habit} 
                        onIncrement={this.props.onIncrement} 
                        onDecrement={this.props.onDecrement} 
                        onDelete={this.props.onDelete}/>))}
                </ul>
                <button className="habit-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}

export default habits;