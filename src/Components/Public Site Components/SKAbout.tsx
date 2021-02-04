import React, { Component } from 'react'

interface SKAbout_tsProps {
    updateToken: (token: string, profile: {} | null) => void;
}

interface SKAbout_tsState {
    name: string; email: string; password: string; isAdmin: boolean;
}

class SKAbout extends Component<SKAbout_tsProps, SKAbout_tsState> {
    constructor(props: SKAbout_tsProps) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isAdmin: false
        }
    }


    render() {
        return (
            <div>

                <h1>What is fSwS?</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus repudiandae earum commodi inventore quaerat incidunt vel cum ipsam deleniti. Praesentium, amet beatae vitae obcaecati repellat ad asperiores optio tempora dolorum deserunt nemo animi exercitationem ducimus consequuntur nisi sint ab error. Dolor, unde? Nam accusantium sequi aspernatur sapiente numquam, delectus modi recusandae facilis impedit dolor reiciendis et, optio, porro accusamus aperiam? Voluptas ipsam assumenda debitis dolor, veritatis quis pariatur iusto nihil sequi reiciendis deleniti qui aperiam.
                </p>

                <h1>What We Do</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde veniam minus ipsum laboriosam, perspiciatis doloribus soluta autem eligendi voluptatibus eius similique, aut dolores, consequatur laborum modi? Unde cum itaque incidunt voluptate ad eveniet illum, sequi molestiae accusamus quis? Eum facilis iste voluptates fugiat voluptas perspiciatis ipsa minima quis ipsam, aliquam odio libero iure quasi consectetur sint qui perferendis ad, omnis sit eaque? Iure aperiam dolorum non? Reprehenderit inventore velit, ex natus cupiditate magnam voluptatum aliquid.</p>
                <ul>
                    <li><p>1:1 Personal Training</p></li>
                    <li><p>Group Training</p></li>
                    <li><p>Workshops & Seminars</p></li>

                </ul>

                <h3>Check Out What These Members Have to Say</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit tenetur, earum voluptate atque odio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit tenetur, earum voluptate atque odio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit tenetur, earum voluptate atque odio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit tenetur, earum voluptate atque odio.</p>

            </div>
        )
    }
}

export default SKAbout;
