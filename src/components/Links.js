import React, { useEffect, useState } from 'react'
import LinksForm from './LinksForm';
import {db} from '../firebase'

const Links = () => {
    const [links, setLinks] = useState([])
    const [currentId, setCurrentId] = useState('')

    const addOrEditTask = async (linkObject) => {
        //console.log(linkObject) 
        await db.collection('links').doc().set(linkObject)
        console.log('new task added')
     }
     const getLinks = async () => { 
        db.collection('links').onSnapshot((querySnapshop) => {
            const docs = []
            querySnapshop.forEach(doc => {
                docs.push({...doc.data(),id: doc.id })
            })
            console.log(docs)
            setLinks(docs)
        })
        
     }
     useEffect(() => {
         getLinks() 
     }, [])

    const onDeleteLink = async id => {
        
        if (window.confirm('are you sure you want to delete this link?')) {
            console.log(id)
            //db.doc('/links/'+{id}).delete()
            await db.collection('links').doc(id).delete()
            console.log('link eliminado')
        }
        
    }
    return (
        <> 
            <div className="col-md-4 col-12 p-2">
                <LinksForm {...{addOrEditTask, currentId, links}} />
            </div>
            <div className="col-md-4 col-12 p-2">
                
                {links.map(link => (
                    <div className="card mb-1" key={link.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4>{link.name}</h4>
                                <div>
                                    <i className="material-icons text-danger" onClick={() => onDeleteLink(link.id)}>close</i>
                                    <i className="material-icons text-danger" onClick={() => setCurrentId(link.id)}>create</i>
                                </div>
                                
                            </div>
                            <p>{link.description}</p>
                            <a href={link.url} target="_blank" rel="noreferrer">
                                Go to Website
                            </a>
                        </div>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default Links















