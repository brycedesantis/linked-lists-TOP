class LinkedList {
	constructor() {
		this.listHead = null
	}

	append(value) {
		if (this.listHead === null) {
			this.prepend(value)
		} else {
			let temp = this.listHead
			while (temp.nextNode !== null) {
				temp = temp.nextNode
			}
			temp.nextNode = new Node(value)
		}
	}

	prepend(value) {
		let temp = null
		if (this.listHead !== null) {
			temp = this.listHead
		}
		this.listHead = new Node(value)
		this.listHead.nextNode = temp
	}

	size() {
		let temp = this.listHead
		let counter = 0
		while (temp !== null) {
			counter++
			temp = temp.nextNode
		}
		return counter
	}

	head() {
		return this.listHead
	}

	tail() {
		let temp = this.listHead
		while (temp !== null) {
			temp = temp.nextNode
		}
		return temp
	}

	at(index) {
		let temp = this.listHead
		for (let i = 0; i < index; i++) {
			temp = temp.nextNode
			if (temp === null) {
				return "Index is empty"
			}
		}
		return temp
	}

	pop() {
		let current = this.listHead
		let previous = null

		while (current !== null) {
			previous = current
			current = current.nextNode
		}

		if (current === null) {
			return "Cannot delete"
		}

		previous.nextNode = null
	}

	contains(value) {
		let temp = this.listHead
		while (temp !== null) {
			if (temp.value === value) {
				return true
			}
			temp = temp.nextNode
		}
		return false
	}

	find(value) {
		let temp = this.listHead
		let index = 0
		while (temp !== null) {
			if (temp.value === value) {
				return index
			}
			temp = temp.nextNode
			index++
		}
		return null
	}

	toString() {
		let temp = this.listHead
		let stringStatment = ""

		while (temp !== null) {
			stringStatment += `(${temp.value}) ->`
			temp = temp.nextNode
		}

		return (stringStatment += "null")
	}
}

class Node {
	constructor(value = null) {
		this.value = value
		this.nextNode = null
	}
}
