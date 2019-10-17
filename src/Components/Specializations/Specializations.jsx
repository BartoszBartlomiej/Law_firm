import React, { Component } from 'react';

import Block from '../../Components/Common/Block';
import Article from '../Common/Article';


class Specializations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => this.setState({
                posts: json.splice(0, 8),
            }))
    }


    render() {


        console.log(this.state.posts)

        const data = [
            {
                title: 'prawo pracy',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo gospodarcze',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo autorskie',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo cywilne',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo rodzinne',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo administracyje',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo karne',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo medyczne',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'prawo handlowe',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            },
            {
                title: 'spadki',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae commodi delectus dignissimos enim fugiat illum molestias nobis repellat, suscipit.',
            }


        ]

        const dataToDisplay = data.map((item, index) => {
            return (
                <Block key={index} title={item.title} content={item.content} />
            )
        })


        const postsData = this.state.posts.map((item, index) => {
            return (
                <Block key={item.id} title={item.title} content={item.body} />
            )
        })



        return (
            <Article>
                <div className='specializations'>
                    <h3>SPECJALIZACJE</h3>
                    <div className='specializations__box'>
                        {dataToDisplay}
                    </div>
                </div>
            </Article>
        );
    }
}

export default Specializations;