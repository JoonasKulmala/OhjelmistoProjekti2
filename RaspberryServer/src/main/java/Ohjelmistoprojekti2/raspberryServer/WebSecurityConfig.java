package Ohjelmistoprojekti2.raspberryServer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import Ohjelmistoprojekti2.raspberryServer.web.UserDetailServiceImpl;


@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private UserDetailServiceImpl userDetailService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http
		.csrf().disable() //Considering enabling and creating a workaround
		.authorizeRequests().antMatchers("/css/**","/api/raspberries","/results").permitAll()
		.antMatchers("/", "/results").permitAll()//kuka tahansa käyttäjä voi nähdä results-sivun
        .and()
        .authorizeRequests()
        .antMatchers("/", "/results").permitAll()//kuka tahansa käyttäjä voi nähdä results sivun
        //.antMatchers("/delete/{id}").hasRole("ADMIN")//ainoastaan admin-oikeudet omaava käyttäjä voi poistaa raspberryn/kohteeb
       //.antMatchers("/edit/{id}").hasRole("ADMIN")//ainoastaan admin-oikeudet omaava käyttäjä voi poistaa raspberryn/kohteen
        .and()
      .formLogin()
          .loginPage("/login")
          .defaultSuccessUrl("/raspberrylist")
          .permitAll()
          .and()
      .logout()
          .permitAll();
	}
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailService).passwordEncoder(new BCryptPasswordEncoder());
	}
}
