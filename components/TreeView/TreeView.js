import React, { useState } from 'react'
import treeData from './data/treeData'

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='tree-node'>
      <div onClick={handleToggle} className={`node-toggle ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded && node.children.length > 0 ? '📂' : '📖'} {node.name}
      </div>
      {isExpanded && (
        <ul className='child-nodes'>
          {node.children.map(childNode => (
            <li key={childNode.id}>
              <TreeNode node={childNode} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const TreeView = () => {
  return (
    <div>
      {treeData.map(rootNode => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </div>
  )
}

export default TreeView
