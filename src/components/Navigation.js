import { ethers } from 'ethers';

const Navigation = ({ connectToWallet, address, balance }) => {

    return (
        <nav>
            <div className='nav__brand'>
                <h1>AI NFT Minter</h1>
            </div>

            {address ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {address.slice(0, 6) + '...' + address.slice(38, 42)} {balance}cUSD
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectToWallet}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;