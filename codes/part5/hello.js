export default function(content) {
	var node = document.createElement('div')
	node.innerHTML = content
	document.body.appendChild(node)
}