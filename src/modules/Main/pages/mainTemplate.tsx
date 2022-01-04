import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../config/api";
import OneFact from "../components/oneFact";
import Fact from "../interface/fact";
import './main.scss';

const Main = () => {
    const [categories, setCategories] = useState<string[] | void>();
    const [category, setCategory] = useState<string | null>(null);
    const [fact, setFact] = useState<Fact>();
    useEffect(() => {
        api.get('categories').then(
            (res) => {
                setCategories(res.data);
                setCategory(res.data[0]);
                getFact();
            }
        )
    }, []);

    const getFact = () => {
        console.log(category)
        api.get(`${category ? `random?category=${category}` : 'random'}`).then(
            (res) => {
                setFact(res.data);
            }
        )
    }
    return (
        <div
            className={'wrapper'}
        >
            <div
                className={'content'}
            >
                <div
                    className={'main-page'}
                >
                    <img src="./assets/img/logo-chuck-norris-s.jpg" alt="chuck-norris-logo" />
                    <div
                        className={'main-page__actions'}
                    >
                        <select
                            onChange={(e) => setCategory(e?.currentTarget?.value)}
                            className={'main-page__actions-select'}
                        >
                            {
                                categories?.map((value: string, index: number) => (
                                    <option
                                        key={index}
                                    >
                                        {value}
                                    </option>
                                ))
                            }
                        </select>
                        <button
                            onClick={() => getFact()}
                            className={'main-page__actions-button'}
                        >
                            CLICK!
                        </button>
                    </div>
                    <div
                        className={'main-page__fact'}
                    >
                        {
                            <OneFact
                                value={fact?.value ?? ''}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
