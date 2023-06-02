import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props)=> {
	const [filteredYear, setFilteredYear] = useState('2020')
	const filterChangeHandler = selectedYear =>{
		
		props.items.map(expenses =>  console.log(expenses.date))
		setFilteredYear(selectedYear)
		
	}
	return (
		<div>
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
			{props.items.map(expenses =>  <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>)}
			
		</Card>
		</div>
	)
}
export default Expenses
