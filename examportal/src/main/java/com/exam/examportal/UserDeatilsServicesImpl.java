package com.exam.examportal;

import org.springframework.beans.factory.annotation.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDeatilsServicesImpl  implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		UsersEntity user = userRepository.findByUsername(username);
		
		if(user == null) {
			
			System.out.println("User Not Found");
			throw  new  UsernameNotFoundException("Not User Found !!");
		}
		
		return user;
	}

}
