'use client'
import React from 'react'

export default function FiltersList({ categories, onChange }) {
    const formOptions = categories.map((category, k) => {
        return (
            <option key={k} value={category}>
                {category}
            </option>
        )
    })
    return (
        <>
            <div>
                <label htmlFor="category" className="mr-3">
                    Filtrer par catégorie
                </label>
                <select
                    onChange={onChange}
                    name="category"
                    className="form-select"
                >
                    <option value="">Afficher tout</option>
                    {formOptions}
                </select>
            </div>
        </>
    )
}
