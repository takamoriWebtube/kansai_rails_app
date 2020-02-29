import SignUpArea from '../components/organisms/signuparea'

export default () => (
    <div className="page">
        <div className="ImageArea">
            <img src='/images/star.jpeg'/>
            <p>アカウント作ってく？？</p>
        </div>
        <SignUpArea />
        <style jsx>{`
            .page {
                width: 100%;
                height: 100vh;
                max-width: 1280px;
                display: flex;
            }
            .ImageArea {
                position: rerative;
                width: 70%;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            p {
                position: absolute;
                top: 20%;
                left: 20%;
                color: #fff;
                font-weight: bold;
                font-size: 4vw;
            }
        `}</style>
    </div>
)