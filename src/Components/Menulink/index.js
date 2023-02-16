import React from 'react'
import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'
export default function MenuLink({to,children}) {
  
  
  
    return (
    < >
 
      <NavLink
        className={({ isActive }) => `
                ${styles.navlink}
                ${isActive ? styles.linkDestacado : ''}
            `}
        to={to}
        end
      >
        <div className={styles.divlink}>
        {children}
        </div>
      
      </NavLink>

    </>
  )
}
