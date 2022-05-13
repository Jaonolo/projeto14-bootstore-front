import React from 'react';
import { useState } from 'react'
import { Uploader } from "uploader";

import cam from '../../../public/img/cam.png';

import Container from "./style";

export default function NewProduct() {

    const uploader = new Uploader({ apiKey: "free" });
    const [data, setData] = useState({

        productName: null,
        productPrice: null,
        productDescription: null,
        productImage: null,
        productCategory: null,
        productQuantity: null,
        productStatus: null

    });

    function HandleSubmit(e) {
        e.preventDefault();
        console.log(data);
    }

    function uploadFiles() {

        uploader.open({ multi: false }).then(files => {
            // files.length > 0 ? console.log(`Files uploaded:\n\n${files.map(x => x.fileUrl).join("\n")}`) : console.log("No files uploaded");
            files.length > 0 ? setData({ ...data, productImage: files.map(x => x.fileUrl) }) : console.log("No files uploaded");
        })
    }

    return (

        <Container productImage={data.productImage ? data.productImage : cam}>

            <div className="header"><h1>Anunciar Produto</h1></div>
            <div className="img-container"><div className="img"></div></div>
            <div className="add-image"><button onClick={uploadFiles}>Adicionar Foto</button></div>

            <div className="form-container">
                <form onSubmit={HandleSubmit}>

                    <input type='text' placeholder='Nome do produto' required
                        onChange={e => setData({ ...data, productName: e.target.value })} />
                    <input type='text' placeholder='Preco' required
                        onChange={e => setData({ ...data, productPrice: e.target.value })} />
                    <input type='text' placeholder='Descricao' required
                        onChange={e => setData({ ...data, productDescription: e.target.value })} />

                    <div className="category">
                        <h1>Selecione a Categoria</h1>
                        <select onChange={e => setData({ ...data, productCategory: e.target.value })} >
                            <option value="Roupas">Roupas</option>
                            <option value="Eletronicos">Eletronicos</option>
                            <option value="Automoveis">Automoveis</option>
                            <option value="Eletrodomesticos">Eletrodomesticos</option>
                            <option value="Moveis">Móveis</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                    <button type='submit'>Postar</button>
                </form>
            </div>

        </Container>
    )
}

