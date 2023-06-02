// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DYNNY_EXPENSES = [
	{ id: `el`, title: `Toilet paper`, amount: 924.12, date: new Date(2023-5-5) },
	{ id: `el`, title: `Game`, amount: 194.12, date: new Date(2022-10-7) },
	{ id: `el`, title: `Doctor`, amount: 946.12, date: new Date(2022-2-8) },
	{ id: `el`, title: `Food`, amount: 944.12, date: new Date(2022-2-1) },
]
const App =() => {
	const [expenses, setExpenses] = useState(DYNNY_EXPENSES)


	const addExpenseHandler = expense =>{
		setExpenses((prevExpenses) => {
			return [expenses, ...prevExpenses]
	})}
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
